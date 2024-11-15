
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import"./moviedetail.css"
import { useParams } from 'react-router-dom'


const Moviedetail = () => {
  
  const { id } = useParams();
   console.log(id)

  //  const movie=Moviedetails.filter((item)=>{
  //        return item.id==id
  //  })
  let movie=[]
  Moviedetails.map((item)=>{
       if(item.id==id)
       {
          movie.push(item)
       }
  })
  console.log(movie)

  return (
    
  <>
 <Header/>

<div>
  
 <div className='maincontent'>
  
  <div className='leftside'>
    <img src="https://upload.wikimedia.org/wikipedia/en/3/3d/Anjaan_Audio.jpg" alt="image"  />
  </div>
  <div className='rightside'>
     <h1>{movie[0].title}</h1>
    <div className='rate'>
    <h4>⭐ 7.6/10(234K Votes)</h4>
    <button>Rate Now</button>
    </div>
     
     <p>Tamil,Hindi,Malayalam,Kannada,Telugu</p>
     <p>Action,Adventure,Fantasy,Period - <span className='ua'>UA</span></p>
     <button className='bookticket'>
      <Link to={"/"} className='booklink'>Book tickets</Link>
      </button>

  </div>
  
 </div>
 <div className='aboutmovie'>
  <h1>About the movie</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ratione dicta, animi corrupti accusantium velit vero odit laudantium soluta, veritatis delectus quod ab placeat. Architecto vitae in odit perferendis voluptas?</p>
 </div>
 

  <h1 className='casth1'>Cast</h1>

  <div className='cast'>
   <div className='persondetail'>
  <img src="https://upload.wikimedia.org/wikipedia/en/3/3d/Anjaan_Audio.jpg" alt="" />
  <p>Suriya</p>
  </div>
  <div className='persondetail'>
  <img src="https://upload.wikimedia.org/wikipedia/en/3/3d/Anjaan_Audio.jpg" alt="" />
  <p>Suriya</p>
  </div>
  <div className='persondetail'>
  <img src="https://upload.wikimedia.org/wikipedia/en/3/3d/Anjaan_Audio.jpg" alt="" />
  <p>Suriya</p>
  </div>
  <div className='persondetail'>
  <img src="https://upload.wikimedia.org/wikipedia/en/3/3d/Anjaan_Audio.jpg" alt="" />
  <p>Suriya</p>
  </div>
 
 </div>

 </div>
 <Footer/>


 
  
  
  </>
  )
}

export default Moviedetail



const Moviedetails = [
  {
      id: 1,
      title: "Thunivu",
      image: "https://wallpaperaccess.com/full/8641997.jpg",
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
      Language:"Tamil,Hindi,Malayalam,Kannada,Telugu",
      category:"Action,Adventure,Fantasy,Period",
      About:"sknsjxksdclsknvj khkjebjfcbjlbjcjlewbcjbjbclebljcbjebjlcbewbjlcewjl"
      
  },
  {
      id: 2,
      title: "Varisu",
      image:
      "https://static.moviecrow.com/gallery/20230223/212510-210671-Varisupo.jpg",
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
      Language:"Tamil,Hindi,Malayalam,Kannada,Telugu",
      category:"Action,Adventure,Fantasy,Period",
      About:"sknsjxksdclsknvj khkjebjfcbjlbjcjlewbcjbjbclebljcbjebjlcbewbjlcewjl"
  },
  {
      id: 3,
      title: "Anjaan",
      image: "https://upload.wikimedia.org/wikipedia/en/3/3d/Anjaan_Audio.jpg",
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
      Language:"Tamil,Hindi,Malayalam,Kannada,Telugu",
      category:"Action,Adventure,Fantasy,Period",
      About:"sknsjxksdclsknvj khkjebjfcbjlbjcjlewbcjbjbclebljcbjebjlcbewbjlcewjl"
  },
  {
      id: 4,
      title: "Vikram",
      image:
          "https://feeds.abplive.com/onecms/images/uploaded-images/2021/07/10/273e787ba809e725948334340c658e68_original.jpg?impolicy=abp_images&imwidth=1200",
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
      Language:"Tamil,Hindi,Malayalam,Kannada,Telugu",
      category:"Action,Adventure,Fantasy,Period",
      About:"sknsjxksdclsknvj khkjebjfcbjlbjcjlewbcjbjbclebljcbjebjlcbewbjlcewjl"
  },
  {
      id: 5,
      title: "Jailer",
      image:
      "https://moviegalleri.net/wp-content/uploads/2022/08/Rajinikanth-Jailer-Movie-First-Look-Poster-HD.jpg",
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
      Language:"Tamil,Hindi,Malayalam,Kannada,Telugu",
      category:"Action,Adventure,Fantasy,Period",
      About:"sknsjxksdclsknvj khkjebjfcbjlbjcjlewbcjbjbclebljcbjebjlcbewbjlcewjl"
  },
  {
      id: 6,
      title: "Bloody Daddy",
      image:
          "https://images.mid-day.com/images/images/2023/may/bloddydaddmainposter_d.jpg",
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
      Language:"Tamil,Hindi,Malayalam,Kannada,Telugu",
      category:"Action,Adventure,Fantasy,Period",
      About:"sknsjxksdclsknvj khkjebjfcbjlbjcjlewbcjbjbclebljcbjebjlcbewbjlcewjl"
  },
];
