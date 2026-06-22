const HistorySection = () => {
    return(
          <section className="profile-section">
            <h2 className="profile-section-title">📚 История чтения</h2>
            <div className="history-list">
              <div className="history-item">
                <span className="history-book">Война и мир</span>
                <span className="history-date">
                  Взята: 01.02.2024, Возвращена: 15.03.2024
                </span>
              </div>
              <div className="history-item">
                <span className="history-book">Преступление и наказание</span>
                <span className="history-date">
                  Взята: 20.03.2024, Возвращена: 10.04.2024
                </span>
              </div>
              <div className="history-item">
                <span className="history-book">1984</span>
                <span className="history-date">
                  Взята: 01.05.2024, Возвращена: 20.06.2024
                </span>
              </div>
              <div className="history-item">
                <span className="history-book">Маленький принц</span>
                <span className="history-date">
                  Взята: 10.07.2024, Возвращена: 01.08.2024
                </span>
              </div>
              <div className="history-item">
                <span className="history-book">Мастер и Маргарита</span>
                <span className="history-date">
                  Взята: 15.08.2024 (активна)
                </span>
              </div>
            </div>
          </section>
    )
}

export default HistorySection