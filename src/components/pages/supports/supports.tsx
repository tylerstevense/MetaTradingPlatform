const Supports = () => {
    return (
        <>
            {
                [1, 2, 3].map((data, i) => (
                    <div key={i}>
                        hello
                    </div>
                ))
            }

            {
                [1, 2, 3, 4, 5].map((data, index) => {
                    return (
                        <div key={index}>
                            <h1>Supports Data</h1>
                        </div>

                    )
                })
            }



        </>

    )
}
export default Supports;