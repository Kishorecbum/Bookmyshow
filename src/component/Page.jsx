import React, { useEffect, useState } from "react";

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
const movies = [
    {
        id: 1,
        title: "Thunivu",
        image: "https://wallpaperaccess.com/full/8641997.jpg",
    },
    {
        id: 2,
        title: "Varisu",
        image:
            "https://static.moviecrow.com/gallery/20230223/212510-210671-Varisupo.jpg",
    },
    {
        id: 3,
        title: "Anjaan",
        image: "https://upload.wikimedia.org/wikipedia/en/3/3d/Anjaan_Audio.jpg",
    },
    {
        id: 4,
        title: "Vikram",
        image:
            "https://feeds.abplive.com/onecms/images/uploaded-images/2021/07/10/273e787ba809e725948334340c658e68_original.jpg?impolicy=abp_images&imwidth=1200",
    },
    {
        id: 5,
        title: "Jailer",
        image:
            "https://moviegalleri.net/wp-content/uploads/2022/08/Rajinikanth-Jailer-Movie-First-Look-Poster-HD.jpg",
    },
    {
        id: 6,
        title: "Bloody Daddy",
        image:
            "https://images.mid-day.com/images/images/2023/may/bloddydaddmainposter_d.jpg",
    },
    
];

const Moviedetail = [
    {
        id: 1,
        title: "Thunivu",
        Actorimg:
            "https://images.mubicdn.net/images/cast_member/31053/cache-207708-1489464229/image-w856.jpg",
        Actor: "Ajith Kumar",
        Actressimg:
            "https://tse4.mm.bing.net/th?id=OIP.ay-y22m9kOtcuis3C76mXQHaIj&pid=Api&P=0&h=180",
        Actress: "Manju Warriror",
        Villianimg:
            "https://tse3.mm.bing.net/th?id=OIP.9f5FSC3B7ykGSn99XoYuxwHaH7&pid=Api&P=0&h=180",
        Villian: "John Kokken",
        Directorimg:
            "https://tse2.mm.bing.net/th?id=OIP.JvwjBzUNnSOd61zAmMrMUQHaE8&pid=Api&P=0&h=180",
        Director: "H.Vinoth",
        rating: "⭐6.1/10",
    },
    {
        id: 2,
        title: "Varisu",
        Actorimg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8rVYaCL0gOMY1sB33xMjgxM__zxr6L72TZw&s",
        Actor: "Vijay",
        Actressimg:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy6euqkuPPPZuAdDot4OBFwmgb_BTuEVSl6Q&s",
        Actress: "Rashmika Mandanna",
        Villianimg:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3u75z_AsEE9SxhnUzZKyE5Qmb6JCeM55cCg&s",
        Villian: "S.J.Surya",
        Directorimg:
            "https://pbs.twimg.com/profile_images/1022772951295381504/QrRenjx8_400x400.jpg",
        Director: "Vamshi Paidipally",
        rating: "⭐6.0/10",
    },
    {
        id: 3,
        title: "Anjaan",
        Actorimg:
            "https://miro.medium.com/v2/resize:fit:736/1*zODN2D1nGrDYFbuO3LU23w.jpeg",
        Actor: "Suriya",
        Actressimg:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Samantha_at_Kushi_Musical_concert_%282%29.jpg/1200px-Samantha_at_Kushi_Musical_concert_%282%29.jpg",
        Actress: "Samantha",
        Villianimg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQesC_2QF897IzJoCEuX1WgNiIwdJyMjJnigw&s",
        Villian: "Asif Basra",
        Directorimg:
            "https://upload.wikimedia.org/wikipedia/commons/9/99/Siva_at_Maniyar_Kudumbam_Audio_Launch.jpg",
        Director: "Siva",
        rating: "⭐5.3/10",
    },
    {
        id: 4,
        title: "Vikram",
        Actorimg:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Kamal_haasan.jpg/220px-Kamal_haasan.jpg",
        Actor: "Kamal Haasan",
        Actressimg:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmhorUQuVpQvJ4h9r0zHXky76ouJrvx651Ig&s",
        Actress: "Gayathrie",
        Villianimg:
            "https://images.filmibeat.com/img/popcorn/profile_photos/vijay-sethupathi-20230420112846-28201.jpg",
        Villian: "Vijay Sethupathi",
        Directorimg:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYAGVoUTnXTBmqXtcSJ1bOSsgbd7RxWA0njA&s",
        Director: "Lokesh Kanagaraj",
        rating: "⭐8.3/10",
    },
    {
        id: 5,
        title: "Jailer",
        Actorimg:
            "https://www.deccanchronicle.com/h-upload/2024/05/05/1087987-rajinikanth1.webp",
        Actor: "Rajinikath",
        Actressimg:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgyp86dKLSJ-4o0Dre7F0rQHq9J5fwMGJcxQ&s",
        Actress: "Mirna Menon",
        Villianimg:
            "https://m.media-amazon.com/images/M/MV5BZDFlNjY2MzgtM2JjZi00YTY1LWI4NzQtMTkzYmQyZTNmMWViXkEyXkFqcGc@._V1_.jpg",
        Villian: "Vinayakan",
        Directorimg:
            "https://static.tnn.in/thumb/msid-112338871,thumbsize-19790,width-1280,height-720,resizemode-75/112338871.jpg?quality=100",
        Director: "Nelson Dilipkumar",
        rating: "⭐7.1/10",
    },
    {
        id: 6,
        title: "Bloody Daddy",
        Actorimg:
            "https://www.bollywoodhungama.com/wp-content/uploads/2020/12/Team-Jersey-wraps-the-shoot-after-a-year-Shahid-Kapoor-posts-a-picture-to-mark-the-occasion.jpg",
        Actor: "Shahid Kapoor",
        Actressimg:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp1fIc4aERyQW2dFOrJiJDf34zUSxnSNv7rg&s",
        Actress: "Amy Aela",
        Villianimg:
            "https://www.thestatesman.com/wp-content/uploads/2023/12/ronit-roy.jpg",
        Villian: "Ronit Roy",
        Directorimg:
            "https://in.bmscdn.com/iedb/artist/images/website/poster/large/ali-abbas-zafar-21198-26-10-2018-11-53-38.jpg",
        Director: "Ali Abbas Zafar",
        rating: "⭐6.6/10",
    },
];

const Page = () => {
    const [selectedmovie, setselectedmovie] = useState(null);
    const [selectedscreen, setselectedscreen] = useState(null);
    const [selectedseat, setselectedseat] = useState([]);
    const [movieId, setMovieId] = useState(0);
    const [currentMovie, setCurrentMovie] = useState([]);
    useEffect(() => {
        const filter = Moviedetail.filter((item) => {
            return item.id == movieId;
        });
        if (filter) {
            setCurrentMovie(filter);
        }
        console.log(movieId);
    }, [movieId]);
    console.log(currentMovie);
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
    const handlebooking = () => {
        alert(
            `seats ${selectedseat.map((index) => index + 1).join(",")} booked for ${selectedscreen.movie.title
            } at ${selectedscreen.time}`
        );
        screens = screens.map((screen) => {
            if (screen.id === selectedscreen?.id) {
                let seats = screen.seats;
                selectedseat.map((seat) => (seats[seat] = 0));
                return {
                    ...screen,
                    seats,
                };
            }
            return screen;
        });
        selectedmovie(null);
        setselectedscreen(null);
        selectedseat([]);
    };
    return (
        <div>
            <h2 className="moviechoosing">Recommended Movies</h2>
            <div className="movie-selection">
                {movies.map((movie) => (
                    <div
                        className="movie-details"
                        key={movie.id}
                        onClick={() => setMovieId(movie.id)}
                    >
                        <img className="movie-poster" src={movie.image} alt={movie.title} />
                        <div className="movie-title">{movie.title}</div>
                    </div>
                ))}
            </div>

            {currentMovie.length > 0 && (
                <>
                    <h2 className="more">More Details</h2>

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
                </>
            )}
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
        </div>
    );
};

export default Page;