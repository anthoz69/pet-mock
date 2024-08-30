import {dateFormat} from '@/util/date'

export default function Table({ pets }) {

    if (!pets.length) return 'No data in table'

    const rowData = pets.map((p) => {
        return (
            <tr key={p.id}>
                <td className="text-center">{p.id}</td>
                <td>{p.name}</td>
                <td className="text-center">{p.type}</td>
                <td className="text-center">{p.age}</td>
                <td className="text-center">{dateFormat(p.createdAt)}</td>
            </tr>
        )
    })

    return (
        <table className="w-full">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Age</th>
                    <th>Created At</th>
                </tr>
            </thead>
            <tbody>
                {pets.length && rowData}
            </tbody>
        </table>
    );
}