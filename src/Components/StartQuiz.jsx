

export const StartQuiz = ({ history }) => {

    
    const handleLogin = () => {
        history.replace("/Questions")
    }

    return (
        <div className="col-lg-12">
           
                <h1>Welcome to the Trivia Challenge!</h1>
                
                <h2 className="col-4 col-lg-2 mt-5"> You will be presented with 10 True or False questions.</h2>

                <h3 className="col-4 col-lg-2 mt-5"> Can you score a 100%?</h3>

                <button
                    className="btn btn-primary"
                    onClick={handleLogin}
                >
                    BEGIN
                </button>
            
        </div>
    )
}
