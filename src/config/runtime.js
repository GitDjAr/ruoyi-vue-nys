export const runtimeMode = import.meta.env.VITE_APP_RUNTIME_MODE || 'remote'

export const isLocalMode = runtimeMode === 'local'
export const isRemoteMode = !isLocalMode
