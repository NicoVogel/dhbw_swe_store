package dhbw.swe.server;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "kunde", path="kunde")
public interface KundeRepository extends PagingAndSortingRepository<Kunde, Integer>{

}
