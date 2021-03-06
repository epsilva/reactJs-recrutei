import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';

import { Container, Content, Profile, ContainerNotification } from './styles';
import logo from '~/assets/icone_recrutei.png';

export default function Header() {
    const profile = useSelector(state => state.user.profile);
    const count = useSelector(state => state.post.count);

    const [isExpanded, setIsExpanded] = React.useState(false);

    function handleToggle(e) {
        e.preventDefault();
        setIsExpanded(!isExpanded);
    }

    const notification = (
        <ContainerNotification>
            <div>
                <div>
                    <h1>{count ? count.paginas : 0}</h1>
                </div>
                <span>Páginas</span>
            </div>
            <div>
                <div>
                    <h1>{count ? count.documentos : 0}</h1>
                </div>
                <span>Documentos</span>
            </div>
            <div>
                <div>
                    <h1>{count ? count.tutoriais : 0}</h1>
                </div>
                <span>Tutoriais</span>
            </div>
            <div>
                <div>
                    <h1>{count ? count.reunioes : 0}</h1>
                </div>
                <span>Reuniões</span>
            </div>
        </ContainerNotification>
    );

    return (
        <Container>
            <Content>
                <nav>
                    <img src={logo} alt="GoBarber" />
                    <Link to="/dashboard">WIKI</Link>
                </nav>
                <div className="notification">{notification}</div>
                <aside>
                    <Profile>
                        <div>
                            <strong>{profile.name}</strong>
                            <Link to="profile">Meu Perfil</Link>
                        </div>
                        <img
                            src="https://api.adorable.io/avatars/50/abott@adorable.png"
                            alt="Esdras Pinheiro"
                        />
                        <button type="button" onClick={e => handleToggle(e)}>
                            <IoIosArrowDown size={20} />
                        </button>
                    </Profile>
                </aside>
            </Content>
            <div className={`collapsed ${isExpanded ? 'is-expanded' : ''}`}>
                {notification}
            </div>
        </Container>
    );
}
