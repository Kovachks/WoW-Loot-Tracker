import LoginButton from "@/components/LoginButton"


const Unauthenticated = () => {

    return (
        <div>
            You need to have an account to view that page.  Please <LoginButton>Login or Signup</LoginButton>
        </div>
    )
}

export default Unauthenticated;