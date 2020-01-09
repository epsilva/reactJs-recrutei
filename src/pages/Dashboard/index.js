import React, { useEffect } from 'react';
import useForm from 'react-hook-form';
import { useField } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';

import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { MdEdit, MdDelete, MdVisibility } from 'react-icons/md';

import api from '~/services/api';
import {
    request,
    insertRequest,
    updateRequest,
    deleteRequest,
} from '~/store/modules/post/actions';

import {
    Container,
    FormContainer,
    TableContainer,
    ContainerButton,
} from './styles';

import Modal from '~/pages/Dashboard/Modal/';

export default function Dashboard() {
    const dispatch = useDispatch();
    const newPost = useSelector(state => state.post.data);
    const posts = useSelector(state => state.post.datas);

    const { register, handleSubmit, errors, reset, setValue } = useForm({});
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const { defaultValue, registerField } = useField('file');

    const [openModal, setOpenModal] = React.useState(false);

    const [file, setFile] = React.useState(defaultValue && defaultValue.id);
    const [postId, setPostId] = React.useState('');
    const [fileUrl, setFileUrl] = React.useState('');
    const [fileName, setFileName] = React.useState('');
    const [selectedTipo, setSelectedTipo] = React.useState('');
    const [selectedPost, setSelectedPost] = React.useState({});

    const ref = React.useRef();

    const columns = [
        { id: 'id', label: 'ID', minWidth: 40 },
        { id: 'tipo', label: 'Tipo', minWidth: 100 },
        {
            id: 'titulo',
            label: 'Título',
            minWidth: 170,
        },
    ];

    const tipos = ['Reunião', 'Documentos', 'Páginas', 'Tutoriais'];

    useEffect(() => {
        dispatch(request());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [newPost]);

    useEffect(() => {
        if (ref.current) {
            registerField({
                name: 'file_id',
                ref: ref.current,
                path: 'dataset.file',
            });
        }
    }, [ref, registerField]);

    async function handleChange(e) {
        const data = new FormData();

        data.append('file', e.target.files[0]);

        const response = await api.post('files', data);

        const { id, name, url } = response.data;
        setFile(id);
        setFileName(name);
        setFileUrl(url);
    }

    function handleChangePage(event, newPage) {
        setPage(newPage);
    }

    function handleChangeRowsPerPage(event) {
        setRowsPerPage(+event.target.value);
        setPage(0);
    }

    async function handleEditar(data) {
        setValue('title', data.title);
        setValue('content', data.content);
        setPostId(data.id);
        setSelectedTipo(data.tipo);
        if (data.file_id) {
            setFile(data.file_id);
            setFileUrl(data.file.url);
            setFileName(data.file.name);
        }
    }

    function handleRemoveFile() {
        setFile('');
        setFileName('');
        setFileUrl('');
    }

    function handleClear() {
        reset({
            title: '',
            content: '',
        });
        setSelectedTipo('');
        setPostId('');
        setFile(undefined);
        setFileName();
        setFileUrl('');
    }

    function handleRemovePost(data) {
        dispatch(deleteRequest(data));
    }

    function onSubmit(data) {
        if (postId !== '' && postId !== undefined) {
            const post = {
                id: postId,
                tipo: selectedTipo,
                title: data.title,
                content: data.content,
                file_id: file,
            };
            dispatch(updateRequest(post));
        } else {
            const post = {
                tipo: selectedTipo,
                title: data.title,
                content: data.content,
                file_id: file,
            };
            console.log(post);
            dispatch(insertRequest(post));
        }

        handleClear();
    }

    function handleCombo(event, values) {
        if (values) {
            setSelectedTipo(values);
        } else {
            setSelectedTipo('');
        }
    }

    async function handleOpenModal(post) {
        setSelectedPost(post);
        setOpenModal(!openModal);
    }

    return (
        <Container>
            <Modal parent={[openModal, setOpenModal]} post={selectedPost} />
            <FormContainer>
                <div>
                    <h1>Novo Post</h1>
                </div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                        <div>
                            <Autocomplete
                                className="autoComplete"
                                onChange={handleCombo}
                                getOptionSelected={(option, value) =>
                                    option === value
                                }
                                getOptionLabel={option => option}
                                options={tipos}
                                value={selectedTipo}
                                renderInput={params => (
                                    <TextField
                                        {...params}
                                        placeholder="Selecione o tipo do Post"
                                        variant="outlined"
                                        name="tipo"
                                        inputRef={register({ required: true })}
                                        InputProps={{
                                            ...params.InputProps,
                                            style: {
                                                width: '260px',
                                                marginRight: '10px',
                                            },
                                        }}
                                    />
                                )}
                            />
                            <TextField
                                type="text"
                                name="title"
                                placeholder="Digite o título aqui"
                                variant="outlined"
                                fullWidth
                                error={errors.nome}
                                inputRef={register({ required: true })}
                            />
                        </div>
                        <div>
                            <TextField
                                type="text"
                                name="content"
                                placeholder="Digite o conteúdo aqui"
                                variant="outlined"
                                fullWidth
                                multiline
                                rowsMax="5"
                                inputRef={register({ required: true })}
                                InputProps={{
                                    style: {
                                        marginRight: '10px',
                                    },
                                }}
                            />
                        </div>
                        <div>
                            {fileName ? (
                                <div>
                                    <a
                                        href={fileUrl}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        {fileName}
                                    </a>
                                    <button
                                        className="button-remove-file"
                                        type="button"
                                        onClick={handleRemoveFile}
                                    >
                                        <MdDelete size={20} />
                                    </button>
                                </div>
                            ) : (
                                    <TextField
                                        type="file"
                                        name="file"
                                        data-file={file}
                                        onChange={handleChange}
                                        ref={ref}
                                        variant="outlined"
                                        InputProps={{
                                            style: {
                                                marginRight: '10px',
                                                width: '350px',
                                            },
                                        }}
                                    />
                                )}
                            <ContainerButton>
                                <div>
                                    <button
                                        className="save-button"
                                        type="submit"
                                    >
                                        Salvar
                                    </button>
                                </div>
                                <div>
                                    <button
                                        className="clear-button"
                                        type="button"
                                        onClick={handleClear}
                                    >
                                        Limpar
                                    </button>
                                </div>
                            </ContainerButton>
                        </div>
                    </form>
                </div>
            </FormContainer>
            <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map(column => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                            <TableCell key="acao" align="center">
                                Ação
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {posts
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map(post => {
                                return (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        tabIndex={-1}
                                        key={post.id}
                                    >
                                        <TableCell align="left">
                                            {post.id}
                                        </TableCell>
                                        <TableCell align="left">
                                            {post.tipo}
                                        </TableCell>
                                        <TableCell align="left">
                                            {post.title}
                                        </TableCell>
                                        <TableCell
                                            padding="none"
                                            align="center"
                                        >
                                            <div>
                                                <button
                                                    type="button"
                                                    title="Ver"
                                                    onClick={() =>
                                                        handleOpenModal(post)
                                                    }
                                                >
                                                    <MdVisibility size={20} />
                                                </button>
                                                <button
                                                    type="button"
                                                    title="Editar"
                                                    onClick={() =>
                                                        handleEditar(post)
                                                    }
                                                >
                                                    <MdEdit size={20} />
                                                </button>
                                                <button
                                                    type="button"
                                                    title="Excluir"
                                                    onClick={() =>
                                                        handleRemovePost(post)
                                                    }
                                                >
                                                    <MdDelete size={20} />
                                                </button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5]}
                    component="div"
                    count={posts.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                    labelDisplayedRows={({ from, to, count }) =>
                        `${from}-${to} de ${count}`
                    }
                />
            </TableContainer>
        </Container>
    );
}
