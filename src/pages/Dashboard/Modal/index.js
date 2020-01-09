import React from 'react';
import TextField from '@material-ui/core/TextField';
import useForm from 'react-hook-form';
import { AiOutlineFileExclamation } from 'react-icons/ai';

import { Modal, Container } from './styles';

export default function ModalPost({ parent, post }) {
    const { register, setValue } = useForm({});

    const [isOpenModal, setIsOpenModal] = React.useState(false);
    const [seletedPost, setSelectedPost] = React.useState({});

    React.useEffect(() => {
        const [openModal] = parent;
        setIsOpenModal(openModal);
        setSelectedPost(post);
        setValue('content', seletedPost.content);
    }, [parent, post, seletedPost, setValue]);

    function handleCloseModal() {
        const [, setOpenModal] = parent;
        setOpenModal(false);
    }

    return (
        <Modal isOpen={isOpenModal}>
            <Container isOpen={isOpenModal}>
                <header>
                    <strong>{seletedPost.title}</strong>
                    <span>{seletedPost.tipo}</span>
                </header>
                <div className="content">
                    <TextField
                        type="text"
                        name="content"
                        variant="standard"
                        fullWidth
                        multiline
                        rowsMax="20"
                        disabled
                        rows="20"
                        inputRef={register({ required: false })}
                    />
                </div>
                <div className="file">
                    {seletedPost.file ? (
                        <a
                            href={seletedPost.file.url}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            {seletedPost.file.name}
                        </a>
                    ) : (
                            <AiOutlineFileExclamation size={20} color="red" />
                        )}
                    <button type="button" onClick={handleCloseModal}>
                        Fechar
                    </button>
                </div>
            </Container>
        </Modal>
    );
}
