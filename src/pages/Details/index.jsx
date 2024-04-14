import { Container, Links, Content } from './styles'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'
import { Tag } from '../../components/Tag'

export function Details() {
  return(
    <Container>
      <Header/>
      <main>
        <Content>
          <ButtonText title='Excluir nota'/>

          <h1>
            Introdução ao React
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis obcaecati tenetur non maiores quasi nemo, nihil, nostrum doloremque beatae ipsam quo sint veritatis accusamus! Culpa perferendis ratione aut reiciendis similique? Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia optio fugiat enim reiciendis nihil aperiam, perspiciatis deleniti dolores alias quod assumenda dolorem veritatis qui nobis porro similique praesentium dolor excepturi!
          </p>
          
          <Section title="Links úteis">
            <Links>
              <li><a href="#">http://www.rocketseat.com.br</a></li>
              <li><a href="#">http://www.rocketseat.com.br</a></li>
            </Links>
          </Section>
          
          <Section title="Marcadores">
            <Tag title="express"/>
            <Tag title="nodejs"/>
          </Section>

          <Button title="Voltar"/>

        </Content>
      </main>

    </Container>  
  )
}