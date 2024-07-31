import React from 'react'
import './Service.css';
import chien from '../assets/chien.jpeg';
import doc1 from '../assets/doc1.jpeg';
import doc8 from '../assets/doc8.jpeg';
import doc9 from '../assets/doc9.jpeg';
import doc10 from '../assets/doc10.jpeg';



import doc from '../assets/doc.jpeg';
import doc2 from '../assets/doc2.jpeg';
import doc3 from '../assets/doc3.jpeg';
import doc4 from '../assets/doc4.jpeg';
import doc5 from '../assets/doc5.jpeg';
import part1 from '../assets/part1.jpeg';
import part2 from '../assets/part2.jpeg';
import part3 from '../assets/part3.jpeg';
import part4 from '../assets/part4.jpeg';
import part5 from '../assets/part5.jpeg';
import part6 from '../assets/part6.jpeg';
import part7 from '../assets/part7.jpeg';



import medecineGenerale from '../assets/generale.jpeg'; // Importez les images pour chaque service
import medecineInterne from '../assets/interne.jpeg';
import hospitalisation from '../assets/hospitalisation.jpeg';
import chirurgie from '../assets/chirurgie.jpeg';
import laboratoire from '../assets/laboratoire.jpeg';
import imagerie from '../assets/imagerie.jpeg';
export default function Service() {
  return (
    <div className='container'>
      <div className="paragraphe">
        <h1> Nos Services</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non ipsa nulla libero aut unde quam, quibusdam dolor accusamus amet, vitae veritatis architecto at neque laudantium impedit quod aspernatur minus optio consequuntur voluptates animi ex, facere quae? Mollitia provident soluta nostrum quam vel veniam iusto praesentium ullam ab veritatis alias quia sit. <br></br> <br></br> Perspiciatis aliquam nam perferendis eos molestias repudiandae nesciunt excepturi ut architecto saepe! Et illum ratione perferendis quibusdam! Quidem quas mollitia nulla ad voluptatum nesciunt facilis. Ut fugiat veritatis enim fugit a rem? Animi ad, inventore aperiam nisi optio ut rerum voluptatibus explicabo sed earum exercitationem numquam perspiciatis vitae!</p>
      </div>
      <div className='servicess'>
          <div className="lescards">
          <div className="mes-cards">
          <div className='service-cards' style={{ backgroundImage: `url(${medecineGenerale})` }}>
            <h3>Médecine Générale</h3>
          </div>
          <p>La médecine générale vétérinaire couvre une vaste gamme de soins pour maintenir la santé de vos animaux de compagnie.</p>
          <button className="stylish-buttons">
                 Voir Plus
              </button>

          </div>
          <div className="mes-cards">

          <div className='service-cards' style={{ backgroundImage: `url(${imagerie})` }}>
            <h3>Imagerie</h3>
          </div>
          <p>Les services d'imagerie médicale, tels que la radiographie, l'échographie et la tomodensitométrie (CT), permettent aux vétérinaires ... </p>
          <button className="stylish-buttons">
                 Voir Plus
              </button>

          </div>

          <div className="mes-cards">

          <div className='service-cards' style={{ backgroundImage: `url(${hospitalisation})` }}>
            <h3>Hospitalisation</h3>
          </div>
          <p>L'hospitalisation offre des soins intensifs et continus aux animaux malades ou blessés qui nécessitent une surveillance étroite</p>
          <button className="stylish-buttons">
                 Voir Plus
              </button>

          </div>

          <div className="mes-cards">

          <div className='service-cards' style={{ backgroundImage: `url(${chirurgie})` }}>
            <h3>Chirurgie</h3>
          </div>
          <p>Les services de chirurgie vétérinaire comprennent une gamme de procédures, allant des interventions de routine, comme les stérilisations...</p>
          <button className="stylish-buttons">
                 Voir Plus
              </button>

          </div>

          <div className="mes-cards">

          <div className='service-cards' style={{ backgroundImage: `url(${medecineInterne})` }}>
            <h3>Médecine Interne</h3>
          </div>
          <p>La médecine interne se concentre sur le diagnostic et le traitement des maladies internes chez les animaux, telles que les troubles cardiaques ...</p>
          <button className="stylish-buttons">
                 Voir Plus
              </button>
          </div>
          <div className="mes-cards">

          <div className='service-cards' style={{ backgroundImage: `url(${laboratoire})` }}>
            <h3>Laboratoire</h3>
          </div>
          <p>Les services de laboratoire vétérinaire comprennent des analyses de sang, des tests urinaires, des examens fécaux.</p>
          <button className="stylish-buttons">
                 Voir Plus
              </button>
          </div>

          </div>
        </div>
        <div className="paragraphe para">
  <h1> Notre équipe</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non ipsa nulla libero aut unde quam, quibusdam dolor accusamus amet, vitae veritatis architecto at neque laudantium impedit quod aspernatur minus optio consequuntur voluptates animi ex, facere quae? Mollitia provident soluta nostrum quam vel veniam iusto praesentium ullam ab veritatis alias quia sit. <br></br> <br></br> Perspiciatis aliquam nam perferendis eos molestias repudiandae nesciunt excepturi ut architecto saepe! Et illum ratione perferendis quibusdam! Quidem quas mollitia nulla ad voluptatum nesciunt facilis. Ut fugiat veritatis enim fugit a rem? Animi ad, inventore aperiam nisi optio ut rerum voluptatibus explicabo sed earum exercitationem numquam perspiciatis vitae!</p>
</div>
<div className="team">
  <div className="team-member">
  <img src={doc}alt="Member 3" className="member-photo" />

    <p>Dr. John Doe</p>
    <p className='metier'>Vétérinaire</p>
  </div>
  <div className="team-member">
  <img src={doc1}alt="Member 3" className="member-photo" />
    <p>Dr. Jane Smith</p>
    <p className='metier'>Chirurgien</p>
  </div>
  <div className="team-member">
    <img src={doc2}alt="Member 3" className="member-photo" />
    <p>Dr. Emily Johnson</p>
    <p className='metier'>Technicien</p>
  </div>
  <div className="team-member">
  <img src={doc3}alt="Member 3" className="member-photo" />

          <p>Dr. Michael Brown</p>
          <p className='metier'>Spécialiste en imagerie</p>
        </div>
        <div className="team-member">
        <img src={doc4}alt="Member 3" className="member-photo" />

          <p>Dr. Lisa White</p>
          <p className='metier'>Technicien</p>
        </div>
        <div className="team-member">
        <img src={doc5} alt="Member 3" className="member-photo" />

          <p>Dr. Richard Green</p>
          <p className='metier'>Chirurgien</p>
        </div>
</div>
<div className="partenaires">
        <h2>Nos Partenaires</h2>
        <div className="partenaires-logos">
          <div className="partenaire">
            <img  src={part7} alt="Partenaire 1" className="partenaire-logo" />
          </div>
          <div className="partenaire">
            <img  src={part1} alt="Partenaire 2" className="partenaire-logo" />
          </div>
          
          <div className="partenaire">
            <img src={part2} alt="Partenaire 3" className="partenaire-logo" />
          </div>
          <div className="partenaire">
            <img src={part3} alt="Partenaire 5" className="partenaire-logo" />
          </div>
          <div className="partenaire">
            <img src={part5} alt="Partenaire 4" className="partenaire-logo" />
          </div>
          
        </div>
        </div>
        <div className="avis">
          <h2>Ce que nos clients disent</h2>
          <div className="avis-container">
            <div className="avis-card">
              <p>"Le Dr. Doe et son équipe sont incroyables. Ils ont sauvé la vie de mon chien!"</p>
              <div className="avis-profile">
                  <img src={doc9} alt="Claire R." className="profile-pic" />
                  <p>- Marie L.</p>

                </div>
            </div>
            <div className="avis-card">
              <p>"Service fantastique et très professionnel. Je recommande vivement cette clinique."</p>
              <div className="avis-profile">
                  <img src={doc10} alt="Claire R." className="profile-pic" />
                  <p>- Jean P.</p>
                </div>
            </div>
            <div className="avis-card">
                <p>"L'équipe est très attentionnée et compétente. Mon chat reçoit toujours les meilleurs soins."</p>
                <div className="avis-profile">
                  <img src={doc8} alt="Claire R." className="profile-pic" />
                  <p>- Claire R.</p>
                </div>
              </div>
          </div>
        </div>

    </div>
  )
}
