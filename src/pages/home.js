const Home = () => {
  return (
    <>
      <h1 class="title">Welcome to BearChat</h1>
      <div class="card">
        <h2>Connect with Binghamton University Students</h2>
        <div class="features">
          <div class="feature">
            <i class="icon coffee-icon"></i>
            <h3>Coffee Chats</h3>
            <p>Connect for professional or casual meetups</p>
          </div>
          <div class="feature">
            <i class="icon map-icon"></i>
            <h3>Outing Buddy</h3>
            <p>Find travel companions for your next adventure</p>
          </div>
          <div class="feature">
            <i class="icon shop-icon"></i>
            <h3>Student Marketplace</h3>
            <p>Buy and sell items within the community</p>
          </div>
        </div>
        <div
          id="g_id_onload"
          data-client_id="281781751899-nktpbjtr43fj0ip8k05oku7pahjgd4ar.apps.googleusercontent.com"
          data-callback="handleCredentialResponse"
        ></div>
        <div class="g_id_signin" data-type="standard"></div>
        <div id="alert" class="alert hidden"></div>
      </div>
    </>
  );
};
export default Home;
