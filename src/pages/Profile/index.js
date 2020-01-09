import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import useForm from 'react-hook-form';
import { Container } from './styles';
import { updateProfileRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';

export default function Profile() {
    const { register, handleSubmit, errors, reset, setValue } = useForm({});
    const profile = useSelector(state => state.user.profile);
    const dispatch = useDispatch();

    React.useEffect(() => {
        setValue('name', profile.name);
        setValue('email', profile.email);
    }, [profile.email, profile.name, setValue]);

    function onSubmit(data) {
        if (data.oldPassword !== '' && data.password !== '') {
            dispatch(updateProfileRequest(data));
        } else {
            const user = {
                name: data.name,
                email: data.email,
            };
            dispatch(updateProfileRequest(user));
        }
    }

    function handleSignOut() {
        dispatch(signOut());
    }

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                <div>
                    <TextField
                        type="text"
                        name="name"
                        placeholder="Nome completo"
                        variant="outlined"
                        fullWidth
                        error={errors.name}
                        inputRef={register({ required: true })}
                    />
                </div>
                <div>
                    <TextField
                        type="email"
                        name="email"
                        placeholder="Seu endereço de e-mail"
                        variant="outlined"
                        fullWidth
                        error={errors.email}
                        inputRef={register({ required: true })}
                    />
                </div>
                <hr />
                <div>
                    <TextField
                        type="password"
                        name="oldPassword"
                        placeholder="Sua senha atual"
                        variant="outlined"
                        fullWidth
                        inputRef={register({ required: false })}
                    />
                </div>
                <div>
                    <TextField
                        type="password"
                        name="password"
                        placeholder="Nova senha"
                        variant="outlined"
                        fullWidth
                        inputRef={register({ required: false })}
                    />
                </div>
                <div>
                    <TextField
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirmar senha"
                        variant="outlined"
                        fullWidth
                        inputRef={register({ required: false })}
                    />
                </div>

                <button type="submit">Atualizar perfil</button>
            </form>

            <button type="button" onClick={handleSignOut}>
                Sair
            </button>
        </Container>
    );
}
