import type { CodegenConfig } from '@graphql-codegen/cli';
import dotenv from 'dotenv';
dotenv.config();
import {encodedCredentials} from './src/graphql/utils';


const credentials = encodedCredentials(process.env.APP_USER,process.env.APP_PASSWORD);
console.log('Credentials ', credentials);
const config: CodegenConfig = {
  overwrite: true,
  schema: [{"https://dialogopolitico.org/graphql" :{
    headers : {
      'Authorization': `Basic ${credentials}`
    }
  }}],
  generates: {
    "src/generated/graphql.ts": {
      plugins: ["typescript"]
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
