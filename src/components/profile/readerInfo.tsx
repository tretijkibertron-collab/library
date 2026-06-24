import type { IReader } from "../../types/reader.types"

interface ReaderProps {
    reader: IReader 
}
const ReaderInfo = ({reader}: ReaderProps) => {
    return(
          <div className="profile-header">
            <div className="profile-avatar">
              <span className="profile-avatar-emoji">👤</span>
            </div>
            <div className="profile-info">
              <h1 className="profile-name">{reader.fullName}</h1>
              <div className="profile-details">
                <span>✉️ {reader.email}</span>
                <span>📞 {reader.phone}</span>
                <span>📅 Регистрация: {reader.registrationDate.toLocaleDateString('ru-RU').replace(/\//g, '.')}</span>
              </div>
              <div className="profile-stats">
                <span>📚 Прочитано книг: <strong>{reader.booksHistory.length}</strong></span>
                <span>📖 Активных книг: <strong>{reader.activeBooks.length}</strong></span>
              </div>
            </div>
          </div>

    )
}

export default ReaderInfo