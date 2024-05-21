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
                <textarea
                    className='input-form'
                    placeholder='description'
                    {...register('description')}
                />
            </div>
            <div className='sectionForm'>
                <label>Client Name:</label>
                <input
                    type="text"
                    className='input-form'
                    placeholder='Name'
                    {...register('cliente.name')}
                />
            </div>
            <div className='sectionForm'>
                <label>Client Surname:</label>
                <input
                    type="text"
                    className='input-form'
                    placeholder='Surname'
                    {...register('cliente.surname')}
                />
            </div>
            <div className='sectionForm'>
                <label>Technician name:</label>
                <input
                    type="text"
                    className='input-form'
                    placeholder='Name'
                    {...register('tecnico.name')}
                />
            </div>
            <div className='sectionForm'>
                <label>Technician surname:</label>
                <input
                    type="text"
                    className='input-form'
                    placeholder='Surname'
                    {...register('tecnico.surname')}
                />
            </div>
            <div className='containerButtonCreate'>
                
            <button type="submit" className='buttonCreate' disabled={isSubmitDisabled}>
                <span className='frontCreate'>
                    Create Report
                </span>
            </button>
            </div>
        </form>
    );
};

export default CreateSegnalazioneForm;