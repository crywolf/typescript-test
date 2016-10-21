
export interface PolicyConfig {
    type: { new(config: PolicyConfig) };
    config: any;
}
