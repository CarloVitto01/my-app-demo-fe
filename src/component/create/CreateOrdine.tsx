import OrdineModel from '../../models/OrdineModel';
import OrdineService from '../../service/OrdineService';
import "./CreateOrdine.css"
import { SubmitHandler, useForm } from 'react-hook-form';

const CreateForm = () => {
    const { register, handleSubmit: handleSubmitForm, reset } = useForm<OrdineModel>()

    const handleSubmit: SubmitHandler<OrdineModel> = async (data) => {
        await OrdineService.createOrdine(data);
        reset();
        window.location.reload();
    }
    

    return (
        <form onSubmit={handleSubmitForm(handleSubmit)}>
            <h3>Cliente</h3>
            <div className='sectionForm'>
                <input type="text" className='input-form' placeholder='Nome' maxLength={30} {...register('cliente.name', { required: true })} />
            </div>
            <h3>Prodotto: </h3>
            <div className='sectionForm'>
                <input type="text" className='input-form' placeholder='Nome' maxLength={30} {...register('prodotto.name', { required: true })} />
                <input type="number" step="0.01" className='input-form' placeholder='Prezzo' maxLength={30} {...register('prodotto.prezzo', { required: true })} />
            </div>
            <div className='containerButtonCreate'>
                <button type="submit" className='buttonFormCreate'>Create Ordine</button>
            </div>
            
        </form>
    );
};

export default CreateForm;