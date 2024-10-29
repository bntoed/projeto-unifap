export default function ItemCard({item,onDelete,onEdit}){
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                </div>
                <div className="space-x-2">
                    <button className="px-3 py-1 bg-blue-500 rounded" onClick={() => onEdit(item)}>
                        Editar
                    </button>

                    <button className="px-2 py-1 bg-red-500 rounded" onClick={() => onDelete(item)}>
                        Apagar
                    </button>
                    
                </div>

            </div>
        </div>
    )
}