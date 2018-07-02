const dev = {
  STRIPE_KEY: "pk_test_pnIwObnnezGG9DkxzbSRPzU8",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-ilur1zyct2eb"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://api.myserverlessapp.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_6yn0qhs9d",
    APP_CLIENT_ID: "49q6178c0mkrc87ctpanmjv6rt",
    IDENTITY_POOL_ID: "us-east-1:cdf82538-af25-4794-b3e9-d02801799cdb"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_pnIwObnnezGG9DkxzbSRPzU8",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-a91yzjw7nl12"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "ttps://api.myserverlessapp.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_pXpYcPn9y",
    APP_CLIENT_ID: "1jdguuijjvips3bldnrjkgh6bv",
    IDENTITY_POOL_ID: "us-east-1:6068e79f-92d0-485d-afe2-a823e9956adb"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
