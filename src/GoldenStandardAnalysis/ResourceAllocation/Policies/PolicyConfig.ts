
export interface IPolicyConfig {
    type: { new(config: IPolicyConfig) };
    config: any;
}
