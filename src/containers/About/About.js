import React from "react";
import { Container, Jumbotron } from "reactstrap";

const About = () => {
  return (
      < >
      <Jumbotron className="bg-info" >
          <Container >
            <h1 className="h1"> HAKKIMIZDA</h1>
            </Container>
        </Jumbotron>
        <Jumbotron  >
          <Container >
            <p className="lead">
            blueyorum.com 2020 yılında kurulan ve yayın hayatına başlayan bir
          öğrenci girişimidir. İnsanların almak istedikleri ürün hakkında
          yeterli yoruma zamanında ulaşamaması ve kargo gibi gereksiz yorumlarla
          vakit kaybetmesi neticesinde bir kurtarıcı vazifesi görmek amacı ile
          hazırlanmıştır. Amacımız kar amacı güderek insanlara hızlı yorum ve
          ürünler hakkında hızlı bilgi alışverişi sağlamaktır. Globalleşen ve
          inevasyona aç bu yeni dünya düzeninde blueyorum.com sahipleri
          olaraktan ve olmaktan şeref duyuyor sizlere daha iyi hizmetler için
          daha çok çalışıyoruz.
            </p>
          </Container>
        </Jumbotron>
        
      </>
      
  );
};

export default About;
