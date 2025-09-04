import { useState } from 'react';
import '../styles/ExecutiveBoard.css';
import PageTransition from '../components/PageTransition';
import { boardData } from '../data/boardData';

function ExecutiveBoard() {
  const [activeBoard, setActiveBoard] = useState('2324'); // '2324' or '2425'
  const currentBoard = boardData[activeBoard];

  const renderMemberCard = (member) => (
    <div key={`${member.name}-${member.position}`} className="member-card">
      <img src={member.image} alt={member.position} />
      <div className="member-info">
        <h3>{member.name}</h3>
        <p>{member.position}</p>
      </div>
      {Object.keys(member.socialLinks).length > 0 && (
        <div className="social-icons">
          {member.socialLinks.linkedin && (
            <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          )}
          {member.socialLinks.instagram && (
            <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          )}
        </div>
      )}
    </div>
  );

  return (
    <PageTransition>
      <div className="executive-board">
        <div className="board-container">
          {/* Board selection tabs */}
          <div className="board-tabs">
            <button 
              className={`board-tab ${activeBoard === '2324' ? 'active' : ''}`}
              onClick={() => setActiveBoard('2324')}
            >
              2023-24 Board
            </button>
            <button 
              className={`board-tab ${activeBoard === '2425' ? 'active' : ''}`}
              onClick={() => setActiveBoard('2425')}
            >
              2024-25 Board
            </button>
          </div>

          <div className="board-content">
            {/* Board intro section */}
            <div className="board-intro">
              <div className="team-photo-section">
                <img 
                  src={currentBoard.teamPhoto}
                  alt={currentBoard.teamPhotoAlt}
                  className="team-photo"
                />
              </div>

              <h1 className="board-title">
                {currentBoard.title}
              </h1>

              <p className="board-description">
                {currentBoard.description}
              </p>
            </div>

            {/* Board members section */}
            <div className="board-members">
              {/* Faculty Coordinators */}
              {currentBoard.facultyCoordinators.length > 0 && (
                <div className="faculty-member">
                  <div className="faculty-row">
                    {currentBoard.facultyCoordinators.map(renderMemberCard)}
                  </div>
                </div>
              )}

              {/* Core Members */}
              {currentBoard.coreMembers.length > 0 && (
                <div className="core-members-row">
                  {currentBoard.coreMembers.map(renderMemberCard)}
                </div>
              )}

              {/* Domain Heads */}
              {currentBoard.domainHeads.length > 0 && (
                <div className="domain-heads-row">
                  {currentBoard.domainHeads.map(renderMemberCard)}
                </div>
              )}

              {/* Other Heads (PR, Projects, etc.) */}
              {currentBoard.otherHeads.length > 0 && (
                <div className="pr-projects-row">
                  {currentBoard.otherHeads.map(renderMemberCard)}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default ExecutiveBoard;