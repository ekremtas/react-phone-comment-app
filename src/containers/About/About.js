import React from "react";
import { Container, Jumbotron } from "reactstrap";
import { PageInfo } from "../../components";

const About = () => {
  return (
    <>
      <PageInfo
        title="HAKKIMIZDA"
        image="https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
      />
      <Jumbotron>
        <Container>
          <p className="lead">
            blueyorum.com 2020 yılında kurulan ve yayın hayatına başlayan bir
            öğrenci girişimidir. İnsanların almak istedikleri ürün hakkında
            yeterli yoruma zamanında ulaşamaması ve kargo gibi gereksiz
            yorumlarla vakit kaybetmesi neticesinde bir kurtarıcı vazifesi
            görmek amacı ile hazırlanmıştır. Amacımız kar amacı güderek
            insanlara hızlı yorum ve ürünler hakkında hızlı bilgi alışverişi
            sağlamaktır. Globalleşen ve inevasyona aç bu yeni dünya düzeninde
            blueyorum.com sahipleri olaraktan ve olmaktan şeref duyuyor sizlere
            daha iyi hizmetler için daha çok çalışıyoruz.
          </p>
        </Container>
      </Jumbotron>
    </>
  );
};

export default About;
