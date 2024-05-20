import SegnalazioneModel from '../../models/SegnalazioneModel';
import SegnalazioniService from '../../service/SegnalazioniService';
import "./CreateSegnalazione.css"
import { SubmitHandler, useForm } from 'react-hook-form';

const CreateSegnalazioneForm = () => {
    const { register, handleSubmit: handleSubmitForm, watch } = useForm<SegnalazioneModel>()
    const description = watch('description');
    const clienteName = watch('cliente.name');
    const clienteSurname = watch('cliente.surname');
    const tecnicoName = watch('tecnico.name');
    const tecnicoSurname = watch('tecnico.surname');
    const isSubmitDisabled = !description || !clienteName || !clienteSurname || !tecnicoName || !tecnicoSurname;


    const handleSubmit: SubmitHandler<SegnalazioneModel> = async (data) => {
        try {
            await SegnalazioniService.createSegnalazioni(data);
            window.location.reload();
        } catch (error) {
            console.error("Errore durante il salvataggio del quiz:", error);
        }
    };

    return (
        <form onSubmit={handleSubmitForm(handleSubmit)}>
            <div className='sectionForm'>
                <div>
                    <label>Description:</label>
                </div>
                <div className='subSectionForm'>
                    <textarea
                        className='input-form'
                        placeholder='description'
                        {...register('description')}
                    />
                </div>
            </div>
            <div className='sectionForm'>
                <div>
                    <h3>Cliente Details</h3>
                </div>
                <div className='subSectionForm'>
                    <label>Name:</label>
                    <input
                        type="text"
                        className='input-form'
                        placeholder='cliente.name'
                        {...register('cliente.name')}
                    />
                    <label>Surname:</label>
                    <input
                        type="text"
                        className='input-form'
                        placeholder='cliente.surname'
                        {...register('cliente.surname')}
                    />
                </div>
            </div>
            <div className='sectionForm'>
                <div>
                    <h3>Tecnico Details</h3>
                </div>
                <div className='subSectionForm'>
                    <label>Name:</label>
                    <input
                        type="text"
                        className='input-form'
                        placeholder='tecnico.name'
                        {...register('tecnico.name')}
                    />
                    <label>Surname:</label>
                    <input
                        type="text"
                        className='input-form'
                        placeholder='tecnico.surname'
                        {...register('tecnico.surname')}
                    />
                </div>
            </div>
            <button type="submit" className='submit' disabled={isSubmitDisabled}>Create Segnalazione</button>
        </form>
    );
};

export default CreateSegnalazioneForm;