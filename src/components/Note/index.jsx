import { Container } from "./styles"
import { Tag } from "../Tag/index"

export function Note({ data, ...rest }) {
    return (
    <Container {...rest}>

      <h1>{data.title}</h1>
      <icons>{data.icons}</icons>
      <p>{data.p}</p>

      {data.tags && (
        <footer>
          {
            data.tags.map(tag =>
              <Tag 
                key={tag.id} 
                title={tag.name}
              />
            )
          }
        </footer>
      )}
    </Container>
  );
}
