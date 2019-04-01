package dhbw.swe.server;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Product {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	private int count;
	private String description;
	private String category;
	private double sellPrice;
	private double buyPrice;
	private String supplier;
	private String origin;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd.mm.yyyy")
	private Date buyDate;
	
}
