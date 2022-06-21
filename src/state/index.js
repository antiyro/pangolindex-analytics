import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
    defaultChain: 'avalanche',
})

export { setGlobalState, useGlobalState };