package dhbw.swe.server;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "produkt", path="produkt")
public interface ProduktRepository extends PagingAndSortingRepository<Produkt, Integer>{

}
