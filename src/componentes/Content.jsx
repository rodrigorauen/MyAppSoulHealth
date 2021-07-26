import React from 'react';
import { Image, View, Linking, TouchableOpacity, Text } from 'react-native';
import Infos from './Infos';
import Imc from './Imc.';
import { styles } from '../style/Styles';
import Footer from './Footer';


export default function Content(){
    return(
        <View style={styles.viewContent}>
            <Image
                    style={styles.img}
                    source={{
                        uri:'https://cdn.pixabay.com/photo/2017/09/22/19/05/casserole-dish-2776735_960_720.jpg'
                    }}
            />
            <Infos titulo='Alimentação saudável' autor='Autor: RodrigoRauen'conteudo='Ninguém duvida. Existe uma relação diretaentre nutrição, saúde e
                bem-estar físico e mental do indivíduo. As pesquisas comprovam
                que a boa alimentação tem um papel fundamental na prevenção e
                no tratamento de doenças. Há milhares de anos, Hipócrates já afirmava: “que teu alimento seja teu remédio e que teu remédio seja
                teu alimento”. É isso mesmo. O equilíbrio na dieta é um dos motivos que permitiu ao homem ter vida mais longa neste século.
                O objetivo deste texto é abordar e discutir diversos assuntos relacionados à alimentação saudável a partir dos 2 anos de idade, ampliando os conhecimentos dos educadores sobre o tema.'/>
            <Image
                style={styles.img}
                source={{
                    uri:'https://cdn.pixabay.com/photo/2018/02/24/09/09/woman-3177574_960_720.jpg'
                }}
            />
            <Infos titulo='Calorias' autor='Autor: Rodrigo Rauen Jr.' 
                conteudo='A caloria é a unidade de calor usada na Nutrição. Esta unidade de
                calor é a medida de energia liberada a partir da “queima” (digestão)
                do alimento e que é então utilizada pelo corpo. Cada nutriente fornece diferentes quantidades de energia (caloria). Quanto maior for a
                variedade de nutrientes que um alimento tiver, maior será o seu
                valor nutricional (equilíbrio entre qualidade e quantidade). Assim, os
                alimentos são divididos em grupos, pelas semelhanças que apresentam, sendo uma delas a concentração de nutrientes.
                Cada nutriente fornece certa quantidade de energia: os carboidratos
                e as proteínas fornecem 4 calorias por grama e as gorduras, 9 calorias por grama.'/>
            <Image
                style={styles.img}
                source={{
                    uri:'https://cdn.pixabay.com/photo/2013/12/17/20/10/bubbles-230014_960_720.jpg'
                }}     
            />
            <Infos titulo='Hidratação' autor='Autor: Rodrigo Rauen Jr'conteudo='Parase ter uma idéia da importância da água para onosso organismo, basta umainformação: a água é a responsávelpor cerca de
            70% do nosso peso corporal. Não é por acaso. A água, que não é
            considerada um alimento, possui inúmeras funções essenciais para
            o nosso organismo. Confira algumas delas:
            A água é o principal solvente do organismo, possibilitando a ocorrênciadas reações químicas;
            é pela água que são transportados os nutrientes, moléculas e
            outras substâncias orgânicas;
            é essencial em processos fisiológicos, desde a digestão até a
            absorção e excreção de substâncias;
            atua como lubrificante nos processos de mastigação, deglutição,
            excreção e nas articulações, entre outros;
            auxilia na regulação da temperatura corporal;
            é necessária para o bom funcionamento dos rins, intestino e
            sistema circulatório;
            mantém o equilíbrio dos líquidos corporais.
            É por essas e outras razões que a água é tão importante para nós.
            Todos os alimentos contêm água, uns mais, outros menos. As melhores fontesde água são: a própria água, que deve ser tratada
            adequadamente; os alimentos líquidos, como leite, sucos e bebidas, e osalimentos sólidos como verduras, frutas e carnes.'
            />
        
            <Imc/> 

            <Infos titulo='Cuide de sua saúde' autor='Autor: R.Rauen'conteudo='Cuidar de sua saúde é importante e muitas vezes pode ser feita simplesmente através de sua alimentação. Pode-se considerar um cuidado preventido, pois como vimos anteriormente muitas doenças podem ser causadas pela má alimentação. Lembre-se de consultar sempre um médico ou um nutricionista.'/>
            <Image
                style={styles.bannerHorizontal}
                source={{
                    uri:'https://cdn.pixabay.com/photo/2015/08/02/22/18/barley-872000_960_720.jpg'
                }}
            />
            <Footer/>
        </View>  
    )
}