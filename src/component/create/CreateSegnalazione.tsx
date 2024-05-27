import SegnalazioneModel from '../../models/SegnalazioneModel';
import SegnalazioniService from '../../service/SegnalazioniService';
import "./CreateSegnalazione.css"
import { SubmitHandler, useForm } from 'react-hook-form';

const CreateSegnalazioneForm = () => {
    const { register, handleSubmit: handleSubmitForm, reset } = useForm<SegnalazioneModel>()

    const handleSubmit: SubmitHandler<SegnalazioneModel> = async (data) => {
        await SegnalazioniService.createSegnalazioni(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmitForm(handleSubmit)}>
            <h3>Cliente</h3>
            <div className='sectionForm'>
                <label>Nome:</label>
                <input type="text" className='input-form' placeholder='Nome' maxLength={30} {...register('cliente.nome', { required: true })} />
                <label>Cognome:</label>
                <input type="text" className='input-form' placeholder='Cognome' maxLength={30} {...register('cliente.cognome', { required: true })} />
            </div>
            <div className='sectionForm'>
                <label>Email:</label>
                <input type="email" className='input-form' placeholder='Email' maxLength={50} {...register('cliente.email', { required: true })} />
                <label>Telefono:</label>
                <input type="number" className='input-form' placeholder='Telefono' maxLength={15} {...register('cliente.telefono', { required: true })} />
            </div>
            <h3>Tecnico: </h3>
            <div className='sectionForm'>
                <label>Nome:</label>
                <input type="text" className='input-form' placeholder='Nome' maxLength={30} {...register('tecnico.nome', { required: true })} />
                <label>Cognome:</label>
                <input type="text" className='input-form' placeholder='Cognome' maxLength={30} {...register('tecnico.cognome', { required: true })} />
            </div>
            <div className='sectionForm'>
                <label>Email:</label>
                <input type="email" className='input-form' placeholder='Email' maxLength={50} {...register('tecnico.email', { required: true })} />
                <label>Telefono:</label>
                <input type="text" className='input-form' placeholder='Telefono' maxLength={15} {...register('tecnico.telefono', { required: true })} />
            </div>
            <div className='sectionForm'>
                <label>Specializzazione:</label>
                <input type="text" className='input-form' placeholder='Specializzazione' maxLength={15} {...register('tecnico.specializzazione', { required: true })} />
                <label>Data assunzione:</label>
                <input type="date" className='input-form' placeholder='Data assunzione' {...register('tecnico.data_assunzione', { required: true })} />
            </div>
            <div className='containerButtonCreate'>
                <button type="submit" className='buttonFormCreate'>Create Report</button>
            </div>
            
        </form>
    );
};

export default CreateSegnalazioneForm;