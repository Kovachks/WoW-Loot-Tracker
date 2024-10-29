import { FormEvent } from "react";
import { useState } from "react";


const Create = () => {
    const [error, setError] = useState(false);

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
        setError(false);

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        if (data.guildName && data.server && data.region && data.password && data.email) {
            console.log('success')
        } else {
            setError(true);
        }
    };

    return (
        <div className="mx-auto mt-12 w-fit">
            <h1 className="mb-4 mx-auto">Guild Creation</h1>
            <form className="border border-black p-3" onSubmit={e => handleSubmit(e)}>
                <div className="flex items-center mb-4">
                    <label className="w-1/3 text-right pr-4" htmlFor="guildName">Guild Name:</label>
                    <input className="border border-black" type="text" id="guildName" name="guildName" />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-1/3 text-right pr-4" htmlFor="server">Server:</label>
                    <input className="border border-black" type="text" id="server" name="server" />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-1/3 text-right pr-4" htmlFor="region">Region:</label>
                    <input className="border border-black" type="text" id="region" name="region" />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-1/3 text-right pr-4" htmlFor="email">Admin Email:</label>
                    <input className="border border-black" type="text" id="email" name="email" />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-1/3 text-right pr-4" htmlFor="password">Password:</label>
                    <input className="border border-black" type="text" id="password" name="password" />
                </div>
                <div className="flex justify-end">
                <button className="py-2 px-4 border border-black mr-2 rounded-md" type="submit">Create</button>

                </div>
            </form>
            {error &&
            <p className="text-red-500">Please fill out entire form</p>
            }
        </div>
    )
}

export default Create;