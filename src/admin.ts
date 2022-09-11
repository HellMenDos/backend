import { INestApplication } from '@nestjs/common';
import AdminBro, { ResourceWithOptions } from 'admin-bro';
import * as AdminBroExpress from 'admin-bro-expressjs';
import { Database, Resource } from 'admin-bro-typeorm';
import { UserEntity } from './entity/Users.entity';
import { CommentsEntity } from './entity/Comments.entity';
import { QuestionsEntity } from './entity/Questions.entity';
import { FavouriteEntity } from './entity/Favourite.entity';
import * as bcrypt from 'bcrypt';

AdminBro.registerAdapter({ Database, Resource });

const UserResource: ResourceWithOptions = {
  resource: UserEntity,
  options: {
    properties: {
      encryptedPassword: {
        isVisible: false,
      },
      password: {
        type: 'string',
        isVisible: {
          list: false, edit: true, filter: false, show: false,
        },
      },
    },
    actions: {
      new: {
        before: async (request) => {
          if(request.payload.password) {
            request.payload = {
              ...request.payload,
              encryptedPassword: await bcrypt.hash(request.payload.password, 10),
              password: undefined,
            }
          }
          return request
        },
      }
    }
  }};
const ComentsResource: ResourceWithOptions = {
  resource: CommentsEntity,
  options: {},
};

const QuestionsResource: ResourceWithOptions = {
  resource: QuestionsEntity,
  options: {},
};

const FavouriteResource: ResourceWithOptions = {
  resource: FavouriteEntity,
  options: {},
};

export async function setupAdminPanel(app: INestApplication): Promise<void> {
  const adminBro = new AdminBro({
    resources: [UserResource, ComentsResource,QuestionsResource, FavouriteResource],        
    rootPath: '/admin',   
  });
  
  const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
    authenticate: async (email, password) => {
      const user = await UserEntity.findOne({ email })
        if (user) {
          if (bcrypt.compareSync(password, user.password) && user.admin && user.verify) {
            return user
          }
        }
      return false
    },
    cookiePassword: 'session Key',
  })

  app.use(adminBro.options.rootPath, router);

}
