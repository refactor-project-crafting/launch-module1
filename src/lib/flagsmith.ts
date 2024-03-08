import FlagsMith from "flagsmith-nodejs";

export const flagsmith = new FlagsMith({
  environmentKey: import.meta.env.FLAGSMITH_ENVIRONMENT,
});
