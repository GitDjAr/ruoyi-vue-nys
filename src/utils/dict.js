// import useDictStore from '@/store/modules/dict'
// import { getDicts } from '@/api/system/dict/data'
// 原版
// /**
//  * 获取字典数据
//  */
// export function useDict(...args) {
//   const res = ref({})
//   return (() => {
//     args.forEach((dictType, index) => {
//       res.value[dictType] = []
//       const dicts = useDictStore().getDict(dictType)
//       if (dicts) {
//         res.value[dictType] = dicts
//       } else {
//         getDicts(dictType).then(resp => {
//           res.value[dictType] = resp.data.map(p => ({ label: p.dictLabel, value: p.dictValue, elTagType: p.listClass, elTagClass: p.cssClass }))
//           useDictStore().setDict(dictType, res.value[dictType])
//         })
//       }
//     })
//     return toRefs(res.value)
//   })()
import useDictStore from '@/store/modules/dict'
import { getDicts } from '@/api/system/dict/data'
import { isLocalMode } from '@/config/runtime'
import { getLocalDict } from '@/services/local-runtime'

/**
 * 获取字典数据
 */
export function useDict(...args) {
  const res = ref({})
  return (() => {
    args.forEach((dictType, index) => {
      res.value[dictType] = []
      const dicts = useDictStore().getDict(dictType)
      if (dicts) {
        res.value[dictType] = dicts
      } else {
        if (isLocalMode) {
          res.value[dictType] = getLocalDict(dictType)
          useDictStore().setDict(dictType, res.value[dictType])
        } else {
          getDicts(dictType).then(resp => {
            res.value[dictType] = resp.data.map(p => ({ label: p.dictLabel, value: p.dictValue, elTagType: p.listClass, elTagClass: p.cssClass }))
            useDictStore().setDict(dictType, res.value[dictType])
          })
        }
      }
    })
    return toRefs(res.value)
  })()
}