import { CreateThoughtsStyle } from './styles';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createStory } from '../../store/Story/storySlice';
import Modal from '../Modal';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
const Schema = Yup.object().shape({
  text: Yup.string().required('Please enter your thought').min(50),
  title: Yup.string()
    .required('Title is required')
    .trim('Cannot use empty space'),
});
const CreateThoughts = ({ open, closeModal }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const onSubmit = (data) =>
    dispatch(
      createStory({
        data,
        successCB: () => {
          closeModal(false);
          reset();
        },
      })
    );
  return (
    <div>
      <CreateThoughtsStyle>
        <Modal open={open}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='field'>
              <input
                name='title'
                className='input'
                placeholder='Title'
                {...register('title')}
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
              <button className='saveButton' type='submit'>
                save
              </button>
            </div>
          </form>
        </Modal>
      </CreateThoughtsStyle>
    </div>
  );
};

export default CreateThoughts;
