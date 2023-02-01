import { CreateThoughtsStyle } from './styles';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createStory } from '../../store/Story/storySlice';
import Modal from '../Modal';
const CreateThoughts = ({ open, closeModal }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

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
            </div>

            <div className='textfield'>
              <textarea
                placeholder='Thoughts'
                aria-multiline={true}
                {...register('text')}
                name='text'
                className='textArea'
              />
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
