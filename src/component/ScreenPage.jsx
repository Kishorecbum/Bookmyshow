const ScreenPage=()=>{
    const [selectedscreen, setselectedscreen] = useState(null);
    const [selectedmovie, setselectedmovie] = useState(null);
   
    const [selectedseat, setselectedseat] = useState([]); 
    const handleseatselect = (index, screen) => {
        if (screen?.id !== selectedscreen?.id) {
            setselectedseat([index]);
            setselectedscreen(screen);
            return;
        }
        setselectedscreen(screen);
        if (selectedseat.includes(index)) {
            setselectedseat(selectedseat.filter((i) => i !== index));
            if (selectedseat.filter((i) => i !== index).length < 1) {
                setselectedscreen(null);
            }
        } else {
            setselectedseat((seats) => [...seats, index]);
        }
    };
    return <>
      <h2 className="more">Booking Details</h2>

<div className="movie-detail">
    {currentMovie.map((detail) => {
        return (
            <div
                key={detail.id}
                onClick={() => selectedmovie(movies)}
                className="moviedetail"
            >
                <h2 className="moviename">{detail.title}</h2>
                <div className="moredetails">
                    <div className="actordetail">
                        <img src={detail.Actorimg} alt={detail.title} />
                        <p>{detail.Actor}</p>
                    </div>
                    <div className="actressdetail">
                        <img src={detail.Actressimg} alt={detail.title} />
                        <p>{detail.Actress}</p>
                    </div>
                    <div className="actordetail">
                        <img src={detail.Villianimg} alt={detail.title} />
                        <p>{detail.Villian}</p>
                    </div>
                    <div className="directordetail">
                        <img src={detail.Directorimg} alt={detail.title} />
                        <p>{detail.Director}</p>
                    </div>
                </div>
                <p className="rating">Ratings : {detail.rating}</p>
            </div>
        );
    })}
</div>
             <h2 className="choose-screen">Choose Your Screen</h2>
                    <div className="screen-selection">
                        {screens.map((screen) => {
                            return (
                                <div
                                    key={screen.id}
                                    className={`screen
                                     ${screen?.id === selectedscreen?.id
                                            ? "selected"
                                            : ""
                                        }
                                 ${screen.seats.includes(1) ? "availabe" : ""}`}
                                >
                                    <div className="screen-number">SCREEN {screen.id}</div>
                                    <div className="screen-time">{screen.time}</div>
                                    <div className="movie-title">{currentMovie[0].title}</div>
                                    <div className="screen-seats">
                                        {screen.seats.map((seat, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    className={`seat ${seat ? "available" : "unavailable"}
                                                    ${selectedseat.includes(
                                                        index
                                                    ) &&
                                                            selectedscreen?.id === screen.id
                                                            ? "selected"
                                                            : ""
                                                        }
                                                    ${selectedseat.includes(
                                                            index
                                                        )
                                                            ? "booked"
                                                            : ""
                                                        }
                                                    `}
                                                    onClick={() => {
                                                        if (seat) {
                                                            handleseatselect(index, {
                                                                ...screen,
                                                                movie: currentMovie[0],
                                                            });
                                                        }
                                                    }}
                                                >
                                                    <div className="seat-number">{index + 1}</div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="booking">
                <div className="booking-summary">
                    <div className="selected-screen">
                        {selectedscreen && (
                            <div className="booked-detail">
                                <p>SELECTED SCREEN : {selectedscreen.id}</p>
                                <p>SELECTED TIME : {selectedscreen.time}</p>
                                <p>SELECTED MOVIE : {selectedscreen.movie.title}</p>
                            </div>
                        )}
                    </div>
                    <div className="selected-seat">
                        {selectedscreen && selectedseat?.length > 0 && (
                            <div>
                                <p>
                                    SELECTED SEATS :
                                    <> {selectedseat.map((index) => index + 1).join(",")}</>
                                </p>
                                <p>NO OF TICKETS : {selectedseat?.length}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="booknow">
                <button
                    className="payment-button"
                    onClick={handlebooking}
                    disabled={!selectedscreen || selectedseat?.length === 0}
                >
                    Book Now
                </button>
            </div>
    </>
}


let screens = [
    {
        id: 1,
        time: "11:00 AM",
        seats: [
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        ],
    },
    {
        id: 2,
        time: "02:00 PM",
        seats: [
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        ],
    },

    {
        id: 3,
        time: "06:00 PM",
        seats: [
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        ],
    },
    {
        id: 4,
        time: "10:00 PM",
        seats: [
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            
        ],
    },
];