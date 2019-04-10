package dhbw.swe.server.rest;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import dhbw.swe.server.model.Product;

@CrossOrigin
@RepositoryRestResource(collectionResourceRel = "product", path="product")
public interface ProductRepository extends PagingAndSortingRepository<Product, Integer>{

}
