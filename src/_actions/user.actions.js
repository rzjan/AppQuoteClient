import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const userActions = {
    login,
    logout,
    register
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }

    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }

    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                () => {
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('Registracón satisfactoria'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error('La contraseña debe tener 8 caracteres, al menos una mayúscula y un símbolo'));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }

    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }

    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}