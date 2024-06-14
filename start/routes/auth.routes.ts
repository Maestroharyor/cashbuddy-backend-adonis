const UsersController = () => import('#controllers/users_controller')
import router from '@adonisjs/core/services/router'

router
  .group(() => {
    router.post('/login', [UsersController, 'login'])
    router.post('/signup', [UsersController, 'signup'])
  })
  .prefix('/auth')
