interface IAppConfig {
  github: {
    clientSecret: string | undefined;
    clientId: string | undefined;
    baseUrl: string | undefined;
  };
}

const AppConfig: IAppConfig = {
  github: {
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    clientId: process.env.GITHUB_CLIENT_ID,
    baseUrl: process.env.GITHUB_BASE_URL,
  },
};

export default Object.freeze(AppConfig);
