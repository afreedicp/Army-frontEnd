import { CreateThoughtsStyle } from '../CreateThoughts/styles';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { getAStory, updateAStory } from '../../store/Story/storySlice';
import Modal from '../Modal';
import Button from 'react-bootstrap/Button';
const Schema = Yup.object().shape({
  text: Yup.string().required('Please enter your thought').min(50),
  title: Yup.string()
    .required('Title is required')
    .trim('Cannot use empty space'),
});
const UpdateThoughts = ({ open, closeModal }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const onSubmit = (data) => {
    if (!data.creator) data.creator = 'Anonymous';
    dispatch(
      updateAStory({
        id: open,
        data,
        successCB: () => {
          closeModal();
        },
      })
    );
  };
  console.log(errors);
  useEffect(() => {
    dispatch(
      getAStory({
        id: open,
        successCB: (data) => {
          console.log(data);
          setValue('title', data?.Title?.title);
          setValue('text', data?.text);
          setValue('creator', data?.creator?.name);
        },
      })
    );
  }, []);
  return (
    <div>
      <CreateThoughtsStyle>
        <div className='styledModal'>
          <Modal open={open}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='crossButton d-flex justify-content-end'>
                <Button variant='danger' onClick={() => closeModal()}>
                  X
                </Button>
              </div>

              <div className='field'>
                <input
                  name='title'
                  className='input'
                  placeholder='Title'
                  {...register('title', { required: true })}
                />
                {errors.title ? (
                  <div className='errorContainer'>
                    <span className='ErrorText'>{errors?.title.message}</span>
                  </div>
                ) : null}
              </div>

              <div className='textfield'>
                <textarea
                  placeholder='Thoughts'
                  aria-multiline={true}
                  {...register('text')}
                  name='text'
                  className='textArea'
                />
                {errors.text ? (
                  <div className='errorContainer'>
                    <span className='ErrorText'>{errors?.text.message}</span>
                  </div>
                ) : null}
              </div>
              <div className='field small-field'>
                <input
                  name='creator'
                  className='input small-input'
                  placeholder='by'
                  {...register('creator')}
                />
              </div>
              <div className='saveButtonDiv'>
                <Button className='saveButton' variant='success' type='submit'>
                  Save
                </Button>
              </div>
            </form>
          </Modal>
        </div>
      </CreateThoughtsStyle>
    </div>
  );
};

export default UpdateThoughts;
