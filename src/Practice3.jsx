import avatar from '/avatar.png'
import starEmpty from '/starEmpty.png'
import { useState } from 'react'
import starFilled from '/starFilled.png'
export default function Practice3() {
  const [contact, setContact] = useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false
});
// const[isFavorite,setIsFavorite] = useState(contact.isFavorite);

function toggleFavorite() {
    // setIsFavorite(!isFavorite);
    setContact(prevContact=>{
      return{
       ...prevContact,
        isFavorite:!prevContact.isFavorite
      }
    })
}

return (
    <main>
        <article className="card">
            <img
                src={avatar}
                className="avatar"
                alt="User profile picture of John Doe"
            />
            <div className="info">
                <button
                    onClick={toggleFavorite}
                    aria-pressed={false}
                    className="favorite-button"
                >
                    <img
                        src={contact.isFavorite ? starFilled:starEmpty}
                        alt="empty star icon"
                        className="favorite"
                    />
                </button>
                <h2 className="name">
                   {contact.firstName} {contact.lastName}
                </h2>
                <p className="contact">{contact.phone}</p>
                <p className="contact">{contact.email}</p>
            </div>

        </article>
    </main>
)
}
