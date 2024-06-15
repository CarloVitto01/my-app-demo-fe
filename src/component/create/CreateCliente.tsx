import ClienteModel from '../../models/ClienteModel';
import ClienteService from '../../service/ClienteService';
import { SubmitHandler, useForm } from 'react-hook-form';

const CreateCliente = () => {
    const { register, handleSubmit: handleSubmitForm, reset } = useForm<ClienteModel>()

    const handleSubmit: SubmitHandler<ClienteModel> = async (data) => {
        await ClienteService.createCliente(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmitForm(handleSubmit)}>
            <h3>Cliente</h3>
            <div className='sectionForm'>
                <input type="text" className='input-form' placeholder='Nome' maxLength={30} {...register('name', { required: true })} />
            </div>
            <div className='containerButtonCreate'>
                <button type="submit" className='buttonFormCreate'>Aggiungi Cliente</button>
            </div>
            
        </form>
    );
};

export default CreateCliente;