const person = {
    name: 'Gregorio Y. Zara',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
};

export default function TodoList() {
    return (
        <div style={person.theme}>
            <h1>{person.name}'s Todos</h1> {/* Menggunakan person.name untuk menampilkan nama */}
            <img
                className="avatar"
                src="https://i.imgur.com/7vQD0fPs.jpg"
                alt={person.name} /> {/* Menggunakan person.name sebagai alt */}
            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
    );
}
