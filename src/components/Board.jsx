import Card from './Card';
import AddIcon from "../assets/add.svg"
import ThreeDotIcon from "../assets/3 dot menu.svg";
import priorityZero from "../assets/No-priority.svg";
import priorityOne from "../assets/Img - Low Priority.svg";
import priorityTwo from "../assets/Img - Medium Priority.svg";
import priorityThree from "../assets/Img - High Priority.svg";
import priorityFour from "../assets/SVG - Urgent Priority colour.svg";

function Board({ tickets, users, grouping, sorting }) {
  const getPriorityName = (priority) => {
    const priorities = {
      4: 'Urgent',
      3: 'High',
      2: 'Medium',
      1: 'Low',
      0: 'No priority'
    };
    return priorities[priority];
  };

  const getPriorityIcons = (priority) => {
    const priorities = {
      4: priorityFour,
      3: priorityThree,
      2: priorityTwo,
      1: priorityOne,
      0: priorityZero
    };
    return priorities[priority];
  };

  const getGroupedData = () => {
    let grouped = {};

    if (grouping === 'status') {
      grouped = tickets.reduce((acc, ticket) => {
        const status = ticket.status;
        if (!acc[status]) acc[status] = [];
        acc[status].push(ticket);
        return acc;
      }, {});
    } else if (grouping === 'user') {
      grouped = tickets.reduce((acc, ticket) => {
        const user = users.find(u => u.id === ticket.userId);
        const userName = user ? user.name : 'Unassigned';
        if (!acc[userName]) acc[userName] = [];
        acc[userName].push(ticket);
        return acc;
      }, {});
    } else if (grouping === 'priority') {
      grouped = tickets.reduce((acc, ticket) => {
        const priority = getPriorityName(ticket.priority);
        if (!acc[priority]) acc[priority] = [];
        acc[priority].push(ticket);
        return acc;
      }, {});
    }

    // Sort tickets within each group
    Object.keys(grouped).forEach(key => {
      grouped[key].sort((a, b) => {
        if (sorting === 'priority') {
          return b.priority - a.priority;
        } else {
          return a.title.localeCompare(b.title);
        }
      });
    });

    return grouped;
  };

  const groupedTickets = getGroupedData();

  return (
    <div className="board">
      {Object.entries(groupedTickets).map(([group, tickets]) => (
        <div key={group} className="board-column">
          <div className="column-header">
            <div className="column-title">
              {grouping === 'priority' && (
                <img 
                  src={getPriorityIcons(tickets[0]?.priority)}
                  alt={group}
                  width="16"
                  height="16"
                />
              )}
              {grouping === 'user' && (
                <div className="user-avatar">
                  {/* User avatar could go here */}
                </div>
              )}
              {group}
              <span className="column-count">{tickets.length}</span>
            </div>
            <div className="column-actions">
              <img src={AddIcon} alt="Add" width="16" height="16" />
              <img src={ThreeDotIcon} alt="Menu" width="16" height="16" />
            </div>
          </div>
          {tickets.map(ticket => (
            <Card
              key={ticket.id}
              ticket={ticket}
              user={users.find(u => u.id === ticket.userId)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;