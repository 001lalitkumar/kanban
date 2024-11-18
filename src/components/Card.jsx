function Card({ ticket, user }) {
    return (
      <div className="ticket-card">
        <div className="card-id">{ticket.id}</div>
        <div className="card-title">{ticket.title}</div>
        <div className="card-tags">
          {ticket.tag.map((tag, index) => (
            <span key={index} className="tag">
              <img src="/assets/feature-request.png" alt="" width="12" height="12" />
              {tag}
            </span>
          ))}
        </div>
        <div className="card-footer">
          <div className={`priority-indicator priority-${ticket.priority}`} />
                <div
        className="user-avatar"
        style={{
            backgroundColor: 'lightblue', // Blue background
            color: 'white', // White text for better contrast
            width: '40px', // Width of the avatar
            height: '40px', // Height of the avatar
            display: 'flex', // Flex to center the text
            alignItems: 'center', // Center the text vertically
            justifyContent: 'center', // Center the text horizontally
            borderRadius: '50%', // Make it round
            fontWeight: 'bold' // Bold font for the initial
        }}
        >
        LK
        </div>

        </div>
      </div>
    );
  }
  
  export default Card;