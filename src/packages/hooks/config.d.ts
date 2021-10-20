export interface IHoustonHooksConfig {
    /**
     * Set a function to be called when a unhandled error ocurrs,
     * if rxjs onUnhandledError is not already set it will also set this
     */
    onUnhandledError(err: any, origin: 'rxjs' | 'hooks'): void;
}
export default function setHoustonHooksConfig(config: IHoustonHooksConfig): void;
export declare function getConfig(): IHoustonHooksConfig;
