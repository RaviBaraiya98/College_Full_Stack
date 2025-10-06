import './App.css';

function App() {
  return (
    <div className="App">
      {/* === AUTH VIEW === */}
      <div id="authView" className="auth card" style={{display: 'none'}}>
        <div className="logo" style={{marginBottom:'12px'}}>
          <span className="dot"></span> 
          <span>Chatter</span>
        </div>
        <h2 id="authTitle">Create account</h2>
        <div className="group">
          <label>Name</label>
          <input id="nameInput" placeholder="Ada Lovelace"/>
        </div>
        <div className="group">
          <label>Email</label>
          <input id="emailInput" type="email" placeholder="ada@chatter.app"/>
        </div>
        <div className="group">
          <label>Password</label>
          <input id="passwordInput" type="password" placeholder="••••••••"/>
        </div>
        <div className="group">
          <button className="btn primary full" id="authSubmit">Sign up</button>
        </div>
        <div className="group">
          <button className="btn full" id="googleBtn">Continue with Google</button>
        </div>
        <div className="switch" id="authSwitch">
          Already have an account? <a href="#" id="toLogin">Sign in</a>
        </div>
        <p className="muted" style={{marginTop:'8px'}}>
          Fill your Firebase config in the script to run locally.
        </p>
      </div>

      {/* === APP VIEW === */}
      <div id="appView" className="app" style={{display: 'none'}}>
        <aside className="sidebar" id="sidebar">
          <div className="logo">
            <span className="dot"></span>
            <span>Chatter</span>
          </div>
          <div className="card user-card">
            <img id="meAvatar" src="https://api.dicebear.com/9.x/thumbs/svg?seed=me" alt="me" />
            <div>
              <div id="meName" style={{fontWeight:'600'}}>—</div>
              <div id="meEmail" className="muted">—</div>
            </div>
          </div>

          <div className="card search">
            <input id="userSearch" placeholder="Search users by name/email"/>
            <button className="btn" id="inviteBtn">+</button>
          </div>

          <div className="nav card">
            <div className="item active" id="navChats">💬 Chats</div>
            <div className="item" id="navPeople">👥 People</div>
            <div className="item" id="navProfile">🙍 Profile</div>
            <div className="item" id="navLogout">🚪 Logout</div>
          </div>

          <div className="card" style={{padding:'8px'}}>
            <div className="muted" style={{padding:'8px 8px 0'}} id="listTitle">Recent chats</div>
            <div className="chats" id="recentList"></div>
            <div className="chats" id="peopleList" style={{display:'none'}}></div>
          </div>

          <div className="muted" style={{padding:'8px',textAlign:'center'}}>Built with Firebase</div>
        </aside>

        <main className="main">
          <div className="topbar">
            <div className="title">
              <div className="menu">
                <button className="btn ghost" id="toggleSidebar">☰</button>
              </div>
              <div>
                <strong id="chatTitle">Welcome</strong>
                <div id="chatSub" className="muted" style={{fontSize:'.9rem'}}>
                  Select a conversation or find people to start chatting.
                </div>
              </div>
            </div>
          </div>

          <div className="content">
            <div className="messages" id="messages"></div>
            <div className="composer" id="composer" style={{display: 'none'}}>
              <textarea id="messageInput" placeholder="Type a message…"></textarea>
              <button className="btn primary" id="sendBtn">Send</button>
            </div>
            <div className="empty" id="emptyState">
              <div className="pill">No chat selected</div>
            </div>
          </div>

          {/* === PEOPLE VIEW === */}
          <div id="peopleView" style={{display: 'none', padding:'20px',overflow:'auto'}}>
            <h2>People</h2>
            <div id="peopleList" style={{display:'flex',flexDirection:'column',gap:'12px',marginTop:'12px'}}></div>
          </div>

          {/* === PROFILE VIEW === */}
          <div id="profileView" style={{display: 'none', padding:'20px',overflow:'auto'}}>
            <h2 style={{marginBottom:'16px'}}>Profile</h2>
            <div className="card profile-card" style={{padding:'20px',maxWidth:'420px',margin:'auto',display:'flex',flexDirection:'column',gap:'16px'}}>
              
              {/* Avatar + Basic Info */}
              <div style={{display:'flex',alignItems:'center',gap:'16px'}}>
                <img id="profileAvatar" src="" alt="me"
                     style={{width:'70px',height:'70px',borderRadius:'50%',objectFit:'cover',border:'2px solid rgba(255,255,255,.12)'}} />
                <div>
                  <div id="profileName" style={{fontWeight:'600',fontSize:'1.2rem'}}></div>
                  <div id="profileEmail" className="muted" style={{fontSize:'.95rem'}}></div>
                </div>
              </div>

              {/* Editable Fields */}
              <div className="group">
                <label style={{fontSize:'.9rem',color:'#a8b0d6'}}>Display name</label>
                <input id="profileNameInput" placeholder="Your name"/>
              </div>

              <div className="group">
                <label style={{fontSize:'.9rem',color:'#a8b0d6'}}>Avatar URL</label>
                <input id="profilePhotoInput" placeholder="https://..."/>
              </div>

              {/* Save Button */}
              <div>
                <button className="btn primary full" id="saveProfileBtn">Save changes</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
