import {rest} from 'msw'; 
import { makeid } from '@/helpers/util';
export const handlers = [
    rest.post('/login', (req, res, ctx) => {
        let isAuthenticated = false
        let statusCode = 403;
        let accessToken = null;
        const { email, password } = JSON.parse(req.body);

        if(email === 'test@email.com' && password === 'password'){//Simulate credential verification
          isAuthenticated = true;
          statusCode = 200;
          accessToken = makeid(32);
        }

        return res(
          // Respond with a 200 status code
          ctx.status(statusCode),
          ctx.json({
            statusCode,
            accessToken,
            isAuthenticated,
          })
        )
      }),
    rest.get('user', (req, res, ctx) => {
        // Check if the user is authenticated in this session
        const isAuthenticated = null;
    
        if (!isAuthenticated) {
          // If not authenticated, respond with a 403 error
          return res(
            ctx.status(403),
            ctx.json({
              errorMessage: 'Not authorized',
            }),
          )
        }
    
        // If authenticated, return a mocked user details
        return res(
          ctx.status(200),
          ctx.json({
            username: 'admin',
          }),
        )
      }),
      rest.post('/refresh', (req, res, ctx) => {
        // Persist user's authentication in the session. Use Redux to store access token
        // sessionStorage.setItem('is-authenticated', 'true')
        const { refreshToken } = req.params;

        if (!refreshToken){
          // If refresh token is not present return an error
          return res(
            ctx.status(401),
            ctx.json({
              errorMessage: 'Not authorized',
            }),
          )
        }

        return res(
          // Respond with a 200 status code if refresh token is present
          ctx.status(200),
          ctx.json({
            accessToken: makeid(32)
          })
       )
      })
]